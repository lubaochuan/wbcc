export const screens = [
  {
    route: 'Home',
    title: 'Home',
    image: 'cover.jpg',
    items:[
      {header:'Welcome to Windermere Baptist Conference Center', body:'We provide a Christian setting in which life changing experiences may occur.'}],
    links:[
      {text:'Accommodations', route:'Accommodations'},
      {text:'Dining', route:'Dining'},
      {text:'Recreation', route:'Recreation'},
      {text:'Guest Policies', route:'Policies'},
      {text:'Contact Us', route:'Contact'}
    ]
  },{
    route: 'Accommodations',
    title: 'Accommodations',
    image: 'https://www.windermereusa.org/wp-content/uploads/2014/02/362-363-817x408.jpg',
    items:[
      {header:'Deluxe, Standard, and Economy Lodging', body:'Windermere offers a wide range of lodging options to meet the variety of needs of our guests.  All lodging and conference facilities are air conditioned and heated.  All lodging has bathroom facilities within the building and handicap accessible lodging is available as well.'},
      {header:'Conference Spaces', body:"We also offer a broad range of conference space options! \nContact us or visit our site for more information!"}],
    links:[
      {text:'Wilderness Creek Dorms', route:'Wilderness Creek Dorms'}]
  },{
    route: 'Wilderness Creek Dorms',
    title: 'Wilderness Creek Dorms',
    image: 'https://www.windermereusa.org/wp-content/uploads/2013/09/LakeViewfront1-905x452.jpg',
    items:[
      {header:'Wilderness Creek Dorms', body:'Set upon the beautiful Lake of the Ozarks, our Wideman Lake View Lodge offers 36 rooms with  4 handicap rooms, each sleeping 6 (1 queen and 2 sets of bunks).'}],
    map:{
      initialRegion: {
        latitude: 38.033790,
        longitude: -92.847700,
        latitudeDelta: 0.0080,
        longitudeDelta: 0.0080},
      markers:[
        { title: "Wilderness Creek Dorms",
          description: "",
          coordinate:{
            latitude: 38.033790,
            longitude: -92.847700}}]}
  },{
    route: 'Dining',
    title: 'Dining',
    image: 'https://www.windermereusa.org/wp-content/uploads/2013/09/LakeViewfront1-905x452.jpg',
    items:[
      {header:'Address', body:
      "1650 Koehler Dr.\nRoach, MO 65787"},
      {header:'Buffet Style', body:"Buffet dining includes an entree, several side dishes, a soup of the day, a salad bar with a wide variety of toppings and dressings, assorted desserts, and beverage center (juices, coffee, tea, and soda) at lunch and dinner. Meals are served in the main dining room. Breakfasts include hot breakfast entrees, side dishes, beverage center, plus assorted cereals, yogurt, & fruit."},
      {header:'Catering Services', body:"We want to help you get the most out of your retreat fellowship times. Let us handle preparing snacks and all the set-up and clean up associated so you can focus on ministering to your attendees, so don't forget about our extensive snack list! One of our more popular events is a breakfast brunch for your group served in a separate section of our dining hall. Whether you're a local group looking for catering services or staying in our lodging, we can meet your catering need."},
      {header:'Lakeside Grill', body:"The Lakeside Grill is serving up items hot off the grill, appetizers, and cool treats from the ice cream freezer. \nGroups can arrange parties, snack packages, or times for the cafe to be open for individual pay out of pocket orders. \nThe Lakeside Grill's fun atmosphere create a great opportunity for guests to build relationships. \nThe grill and Marina patio is a great spot to take in a movie with your whole group in a laid back, casual setting. It works well for small group meetings and fellowship times. \nThe grill is also equipped with WiFi!"}],
     map:{
        initialRegion: {
          latitude: 38.0326914,
          longitude: -92.8380096,
          latitudeDelta: 0.0080,
          longitudeDelta: 0.0080,
        },
        markers: [
          { title: "Dining Hall",
            coordinate: {
              latitude:38.032770,
              longitude:-92.837198,
            },
          },{
            title: "Snack Shack",
            coordinate: {
              latitude: 38.033315,
              longitude: -92.837141,
            }}]}
  },{
    route: 'Contact',
    title: 'Contact Us',
    image: 'https://www.windermereusa.org/wp-content/uploads/2013/09/LakeViewfront1-905x452.jpg',
    items:[
      {header:'Address', body:
      "1650 Koehler Dr.\nRoach, MO 65787"},
      {header:'Phone', body:"573-346-5200"},
      {header:'Email', body:"sales@windermereusa.org"}]
  },{
    route: 'Recreation',
    title: 'Recreation',
    image: 'https://www.windermereusa.org/wp-content/uploads/2018/03/All-4-Logos-horizontal-2-1024x353.png',
    items:[
      {header:'Activities', body:'We offer many recreation options.'}],
    links:[
      {text:'The Cave', route:'Cave'},
      {text:'The Edge', route:'Edge'},
      {text:'The Forest', route:'Forest'},
      {text:'The Splash', route:'Splash'},
      {text:'The Marina', route:'Marina'}]
  },{
    route: 'Cave',
    title: 'The Cave',
    image: 'https://www.windermereusa.org/wp-content/uploads/2014/02/Cave2008.jpg',
    items:[
      {header:'When', body:'Monday-Saturday'},
      {header:'Where', body:'Meet at the entrance of the cave'},
      {header:'Where', body:'Meet at the entrance of the cave'},
      {header:'How', body:'Schedule and purchase tickets at the Front Desk'},
      {header:'Duration', body:'Approximately 90 minutes'},
      {header: "Do-It-Yourself Tour",
        body: "The first 350 feet of Windermere's cave is open 24/7 for you to explore on your own. Our path is completely paved and partially lighted to allow you a wonderful experience as you walk.",},
      {header: "What do I bring?",
        body: "Bring clothes that you don't mind getting a little dirty. We will provide flashlights for all Beyond the Gate tours.",},],
    map:{
      initialRegion: {
        latitude: 38.0326914,
        longitude: -92.8380096,
        latitudeDelta: 0.0080,
        longitudeDelta: 0.0080},
      markers:[
        { title: "The cave",
          description: "",
          coordinate:{
            latitude: 38.031336,
            longitude: -92.837912}}]}
  },{
    route: 'Edge',
    title: 'The Edge',
    image: 'https://www.windermereusa.org/wp-content/uploads/2014/02/highs_11.jpg',
    items: [
      {header:'When', body:'Monday-Saturday'},
      {header:'Where', body:'Recreation Climbs meet 10 minutes before scheduled time at The Edge'},
      {header:'How', body:'Schedule and purchase tickets at The Barn'},
      {header:'Duration', body:'Recreation Climbs are 1 hour long'},
      {header: 'Recreation Climbs', body: 'During your hour of free climb time you could experience flying down our zip lines or even leap into nothingness on our Leap of Faith. Our staff are fully trained and certified to ACCT Standards and have the experience to match. Our open elements may change from day to day resulting in the possibility of having a different experience each day.'},
      {header: 'Private Sessions',
        body: 'Are you looking for something that is more group oriented? We have the perfect solution for you, a Private Session! Our staff will work one-on-one with you to help design the perfect program for what you are wanting to do. Private Sessions are typically 3 to 8 hours, but we can adjust that to meet your groups needs.',},],
    map:{
      initialRegion: {
        latitude: 38.0333826,
        longitude: -92.8508212,
        latitudeDelta: 0.0080,
        longitudeDelta: 0.0080},
      markers:[
        { title: "The Edge",
          description: "",
          coordinate:{
            latitude: 38.0333826,
            longitude: -92.8508212}}]}
  },{
    route: 'Forest',
    title: 'The Forest',
    image: 'https://www.windermereusa.org/wp-content/uploads/2014/02/IMG_1001-768x1024.jpg',
    items: [
      {header:'When', body:'By reservation.'},
      {header:'Where', body:'Games are held at The Forest.'},
      {header:'How', body:'Reservations can be made with your event planner.'},
      {header:'Duration', body:'Games are 1 hour long.'},
      {header:'Fees', body:'$11 per person. Fee includes your equipment rental, a stash of ammo and use of the course for an hour.'},
      {header:'Release Form', body:'The FOREST participants must submit a release for signed by parents if participant is under 18 which is available on the Windermere website.'}],
    map:{
      initialRegion: {
        latitude: 38.0330855,
        longitude: -92.8508168,
        latitudeDelta: 0.0080,
        longitudeDelta: 0.0080},
      markers:[
        { title: "The Forest",
          description: "",
          coordinate: {
            latitude: 38.0330855,
            longitude: -92.8508168}}]}
  },{
    route: 'Splash',
    title: 'The Splash',
    image: 'https://www.windermereusa.org/wp-content/uploads/2014/01/IMG_4246edit.jpg',
    items: [
      {header:'When', body:'Monday-Saturday during summer season.'},
      {header:'Where', body:'Participants meet at the boat house on the dock.'},
      {header:'How', body:'Schedule and purchase tickets for the inflatables at the dock.'},
      {header:'Duration', body:'The inflatables are in 30 minute sessions.'},
      {header:'The Inflatables', body:'Ready to get wet while having a blast? Jump into our Inflatable Waterpark! With a wide variety of water trampolines, icebergs, and water tots, it is fun for the whole family. Our waterpark is under the close supervision of our American Red Cross certified Lifeguards. All participants must wear a provided life vest.',
      },
      { header:'What do I bring?', body:'Bring modest, one piece swimwear and a towel. Life vests are provided.'}],
    map:{
      initialRegion: {
        latitude: 38.0334189,
        longitude: -92.8365549,
        latitudeDelta: 0.0080,
        longitudeDelta: 0.0080},
      markers:[
        { title: "The Forest",
          description: "",
          coordinate: {
            latitude: 38.0334189,
            longitude: -92.8365549}}]}
  },{
    route: 'Marina',
    title: 'The Marina',
    image: 'https://www.windermereusa.org/wp-content/uploads/2014/02/2013-05-29-043.jpg',
    items: [
      {header:'When', body:'Monday-Saturday during summer season.'},
      {header:'Where', body:'Rentals meet at the boat house on the dock.'},
      {header:'How', body:'Schedule and purchase tickts for Rentals at the dock.'},
      {header:'Duration', body:'Rentals are in 30 minute sessions.'},
      {header:'Rentals & Marina Services', body: 'See Windermere Cove from a whole new perspective. We offer many different types of boats for rent including canoes and kayaks! Want to bring your boat? We have a full service marina available with over 40 boat slips. Need fuel? We got you covered! Out of bait? We got you covered! Fishermen - when you have caught your limit we have a fish cleaning station located on our dock.'},
      {header:'What do I bring?', body:'Bring modest, one piece swimwear and a towel. Life vests are provided.'}],
    map:{
      initialRegion: {
        latitude: 38.0332049,
        longitude: -92.8356746,
        latitudeDelta: 0.0080,
        longitudeDelta: 0.0080},
      markers:[
        { title: "The Forest",
          description: "",
          coordinate: {
            latitude: 38.0332049,
            longitude: -92.8356746}}]}
  },{
    route: 'Contact',
    title: 'Contact Us',
    image: 'marina.jpg',
    items: [
      {header:'When', body:'Monday-Saturday during summer season.'},
      {header:'Where', body:'Rentals meet at the boat house on the dock.'},
      {header:'How', body:'Schedule and purchase tickts for Rentals at the dock.'}]}
]

export function findScreenByRoute(route){
  return screens.find((obj)=>obj.route==route)
}
