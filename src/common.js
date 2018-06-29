export function findScreenByRoute(screens, route){
  return screens.find((obj)=>obj.route==route)
}
