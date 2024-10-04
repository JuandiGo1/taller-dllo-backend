import { Router, Request, Response } from "express";
import { readUsers , findUsersByHobby, findUserById, TeamExperience, findUserByFaction} from "./user.controller";

// INIT ROUTES
const userRoutes = Router();

// DATOS
let users = [
  { id: 1, name: "Robin Restrepo", carrera: "Psicología" },
];

// DECLARE ENDPOINT FUNCTIONS
async function GetUsers(request: Request, response: Response) {
  const users = await readUsers();

  response.status(200).json({
    message: "Success.",
    users: users,
  });
}

// DECLARE ENDPOINTS
userRoutes.get("/", GetUsers);


userRoutes.get("/hobby",  (req: Request, res: Response)=>{
  const hobby = req.query.hobby as string;
  console.log(hobby)
  if (!hobby) {
    return res.status(400).json({
      message: "Please provide a valid hobby query parameter",
    });
  }
  const users =  findUsersByHobby(hobby  );

  res.status(200).json({
    message: "Users with "+hobby +" as a hobby",
    users: users,
  })
});

userRoutes.get("/exist/:id",  (req: Request, res: Response)=>{
  const id = parseInt(req.params.id);
  const exist= findUserById(id) ;
  res.status(200).json({
    message: "User "+req.params.id ,
    exist: exist
  })
});

userRoutes.get("/team-experience", (req: Request, res: Response) => {
  const team = req.query.team as string;  

  if (!team) {
    return res.status(400).json({
      message: "Please provide a valid team name",
    });
  }

  const experience = TeamExperience(team);
  return res.status(200).json({
    message: `Total experience for team: ${team}`,
    totalExperience: experience + " Years"
  });
});

userRoutes.get("/by-faction",  (req: Request, res: Response)=>{
  const faction = req.query.faction as string;

  const users =  findUserByFaction(faction);

  res.status(200).json({
    message: "Faction  "+faction +" users",
    users: users,
  })
});



userRoutes.post("/users", (req: Request, res: Response) => {
  const { name, carrera } = req.body;

  // Validamos que el nombre y la carrera se proporcionen
  if (!name || !carrera) {
    return res.status(400).json({
      message: "Both 'name' and 'carrera' fields are required",
    });
  }

  const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
  const newUser = { id: newId, name, carrera };

  users.push(newUser);

  // Respuesta exitosa
  return res.status(201).json({
    message: "User registered successfully",
    user: newUser,
  });
});

// EXPORT ROUTES
export default userRoutes;
