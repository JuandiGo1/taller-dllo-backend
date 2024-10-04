import {readUserAction} from "./read.user.action";
import { UserType } from "./user.model";
const datos = require("./datos.json");


// DECLARE CONTROLLER FUNCTIONS
async function readUsers(): Promise<UserType[]> {
  const users = await readUserAction();

  return users;
}

function findUsersByHobby(hobby: string): UserType[] {
  // Filtrar usuarios que tienen el hobby especificado
  return datos.filter((user: UserType) => user.hobbies.includes(hobby));
}

function findUserById(id: number):boolean {
  return datos.some((user:UserType) => user.id === id) ;
}

function findUserByFaction(faction: string):UserType[] {
  return datos.filter((user:UserType) => user.faction === faction );
}

function TeamExperience(team:string):number{
   // Filtramos los usuarios que pertenecen al equipo
   const teamMembers = datos.filter((user:UserType)=> user.team === team);

   // Si no hay miembros en el equipo, devolvemos un mensaje adecuado
   if (teamMembers.length === 0) {
     return 0
   }
 
   // Calculamos la experiencia total del equipo
   const totalExperience = teamMembers.reduce((total:number, user:UserType) => total + user.years, 0);

   return totalExperience
}


// EXPORT CONTROLLER FUNCTIONS
export { readUsers, findUsersByHobby,findUserById, TeamExperience,findUserByFaction };
