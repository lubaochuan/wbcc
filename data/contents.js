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
      {text:'Campus Map', route:'CampusMap'},
      {text:'Guest Policies', route:'Policies'},
      {text:'Contact Us', route:'Contact'}
    ]
  },{
    route: 'Accommodations',
    title: 'Accommodations',
    image: 'accomodations.jpg',
    items:[
      {header:'Deluxe, Standard, and Economy Lodging', body:'Windermere offers a wide range of lodging options to meet the variety of needs of our guests.  All lodging and conference facilities are air conditioned and heated.  All lodging has bathroom facilities within the building and handicap accessible lodging is available as well.'},
      {header:'Conference Spaces', body:"We also offer a broad range of conference space options! \nContact us or visit our site for more information!"}],
    map: {
      initialRegion: {
        latitude: 38.0326914,
        longitude: -92.8380096,
        latitudeDelta: 0.0080,
        longitudeDelta: 0.0080,
      },
      markers: [
        { title: "Wilderness Creek Dorms",
          coordinate: {
            latitude: 38.033790,
            longitude: -92.847700}},
        {
          title: "Tent Area",
          coordinate: {
            latitude: 38.028769,
            longitude: -92.838665}},
        {
          title: "Motel",
          coordinate: {
            latitude:38.032044,
            longitude:-92.837657}},
        {
          title: "Spring Valley Dorms",
          coordinate: {
            latitude: 38.035132,
            longitude: -92.843614}},
        {
          title: "Cedar Grove Cottages",
          coordinate: {
            latitude: 38.030025,
            longitude: -92.838489}},
        {
          title: "Family Cabins",
          coordinate: {
            latitude: 38.035371,
            longitude: -92.834923}},
        {
          title: "Lake View Dorms",
          coordinate: {
            latitude: 38.035880,
            longitude: -92.837674}},
        {
          title: "RV Park",
          coordinate: {
            latitude: 38.028756,
            longitude: -92.839624}},
        {
          title: "Lake View Lodge",
          coordinate: {
            latitude: 38.035171,
            longitude: -92.839172}},
        {
          title: "Lake View Conf. Bldg.",
          coordinate: {
            latitude: 38.035347,
            longitude: -92.839868}},
        {
          title: "Deer Ridge Conf. Bldg.",
          coordinate: {
            latitude: 38.035360,
            longitude: -92.841024}},
        {
          title: "Koehler Lodge",
          coordinate: {
            latitude: 38.034747,
            longitude: -92.842267}},
        {
          title: "Dogwood Lodge/Murdock Conf. Room",
          coordinate: {
            latitude: 38.037217,
            longitude: -92.839466}},
        {
          title: "Red Bud Lodge",
          coordinate: {
            latitude: 38.036645,
            longitude: -92.839375}},
        {
          title: "Wilderness Creek Auditorium",
          coordinate: {
            latitude: 38.034712,
            longitude: -92.845063}},
        {
          title: "Multi-purpose Building",
          coordinate: {
            latitude: 38.030493,
            longitude: -92.837084}},
        {
          title: "Harding Auditorium",
          coordinate: {
            latitude:38.031735,
            longitude:-92.837165}},
        {
          title: "Spring Valley Auditorium",
          coordinate: {
            latitude:38.034305,
            longitude: -92.842864}},
        {
          title: "Cedar Grove Conference Building #1",
          coordinate: {
            latitude:38.029017,
            longitude: -92.839228}},
        {
          title: "Cedar Grove Conference Building #2",
          coordinate: {
            latitude: 38.029958,
            longitude: -92.839436}},
        {
          title: "Educational Building",
            coordinate: {
              latitude: 38.030917,
              longitude: -92.838289}},
        {
          title: "Prayer Chapel",
          coordinate: {
            latitude:38.032134,
            longitude: -92.833155}}]}
  }, {
    route: 'Dining',
    title: 'Dining',
    image: 'dining.jpg',
    items:[
      {header:'Choices', body:
      "We have three great dining opportunities for your group: regular buffet service dining, catered meals, and the Lakeside Grill."},
      {header:'Buffet Style', body:"Buffet dining includes an entree, several side dishes, a soup of the day, a salad bar with a wide variety of toppings and dressings, assorted desserts, and beverage center (juices, coffee, tea, and soda) at lunch and dinner. Meals are served in the main dining room. Breakfasts include hot breakfast entrees, side dishes, beverage center, plus assorted cereals, yogurt, & fruit."},
      {header:'Meal Times', body:
      "Breakfast: 7:30-8:30am\nLunch: 12:00-1:00pm\nDinner: 5:30-6:30pm"},
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
            title: "Lakeside Grill",
            coordinate: {
              latitude: 38.033315,
              longitude: -92.837141,
            }}]}
  }, {
    route: 'Recreation',
    title: 'Recreation',
    image: 'recreation.png',
    items:[
      {header:'Activities', body:'We offer many recreation options.'}],
    links:[
      {text:'The Cave', route:'Cave'},
      {text:'The Edge', route:'Edge'},
      {text:'The Forest', route:'Forest'},
      {text:'The Splash', route:'Splash'},
      {text:'The Marina', route:'Marina'}]
  }, {
    route: 'Contact',
    title: 'Contact Us',
    image: 'contact.jpg',
    items:[
      {header:'Address', body:
      "1650 Koehler Dr.\nRoach, MO 65787"},
      {header:'Phone', body:"573-346-5200"},
      {header:'Email', body:"sales@windermereusa.org"}]
  }, {
    route: 'Cave',
    title: 'The Cave',
    image: 'cave.jpg',
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
    image: 'edge.jpg',
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
    image: 'forest.jpg',
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
    image: 'splash.jpg',
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
        { title: "The Splash",
          description: "",
          coordinate: {
            latitude: 38.0334189,
            longitude: -92.8365549}}]}
  },{
    route: 'Marina',
    title: 'The Marina',
    image: 'marina.jpg',
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
        { title: "The Marina",
          description: "",
          coordinate: {
            latitude: 38.0332049,
            longitude: -92.8356746}}]}
  },{
    route: 'Policies',
    title: 'Policies',
    image: 'policy.jpg',
    items: [
      {header:'Guest Rules and Policies', body:'The policies relate to individual responsibilities. The Conference Coordinator is responsible for communicating and maintaining compliance with these policies within their group.'},
      {header:'Alcohol', body:'Use or possession of alcoholic beverages or illicit drugs is forbidden. Guests in non-compliance will be asked to leave, will forfeit any right to refund, and may jeopardize the invitation of their group to return to Windermere.'},
      {header:'Campfire', body:'Campfires should be scheduled in advance of your conference. Campfires are located in the Vesper area, Cedar Grove, Lake View, and Spring Valley. Windermere can set the firewood; however, the groups will be responsible for lighting the fire. Groups may also provide their own firewood if approved by the Account Manager. Contact the Account Manager ot make arrangements.'},
      {header:'Curfew', body:'There is a 12:30 AM curfew. All guests, including sponsors, need to be in their rooms by this time.\nQuiet time begins at 12:00 AM.'},
      {header:'Dress', body:"Clothing will be modest and appropriate for a family atmosphere. Shorts, skirts, or dresses that are extremely short are inappropriate. All females' swimsuits MUST BE ONE PIECE or have a cover worn over them at all times. All males' swimsuits must be trunk type; no Speedo type swimsuits are allowed. Violations of this dress policy by guests will be addressed through consultation with group's leader(s)."},
      {header:'Firearms', body:'Firearms and fireworks of any nature are forbidden.'},
      {header:'Food & Drink', body:'No food or drink is allowed inside of Harding Auditorium or the Gymnasium of the Multi-Purpose Building.'},
      {header:'Lake/Swimming', body:'NO SWIMMING IN THE LAKE EXCEPT IN DESIGNATED SWIMMING AREAS. The ski beach is to facilitate skiers in having easy access to the water. Skiers using this area should be cautious.'},
      {header:'Lost & Found', body:'Items that are found in the buildings or on the grounds are placed in lost-and-found. Please contact the Front Desk concerning lost and found items.'},
      {header:'Medical', body:"Windermere staff must be notified of all medical incidents that occur on the premises.\nFor secondary reinbursement by Windermere for any medical incidents, please contact the Account Manager. The guest is responsible for providing evidence of any and all applicable insurance to the medical provider. Once the guest's insurance company has paid the medical provider, the guest must provide an explanation of benefits from the insurance company to Windermere."},
      {header:'Mail', body:"Mail is available for pickup after 12:00 PM. All mail needs to include the guest's name and name of the camp/conference the guest is attending. Any mail received after the group ahs departed will be marked to return to sender."},
      {header:'Pets', body:"ABSOLUTELY NO PETS ARE ALLOWED ON THE GROUNDS, except within the RV Park boundaries. Guests having pets outside the RV Park boundaries will be asked to take their pets off site or vacate the grounds."},
      {header:'Photography', body:"Please note that a Windermere Staff or photographer may be on site taking pictures of events and activities at Windermere. These photographs may be used on our web site, social media, and in promotional materials."},
      {header:'Reservations', body:"If individuals and/or individual families are to make their own reservations for this event, then Windermere Reservations will require an individual/family deposit to be made consisting of $10.00 per night per person or per family for each unit reserved. Cancellation 30 or more days prior to arrival date will result in a full refund of the individual deposit; cancellation less than 30 days prior will result in forfeiture of the individual deposit. No reservations for a conference will be processed until we have received the signed contract and deposit.\nReservations can only be made or modified by the guest occupying the lodging room. Exceptions to the policy will only be made if the person requesting the change/room is paying for the room."},
      {header:'Rollerblades', body:"Rollerblades, skateboarding, bikes, and scooters are allowed on the pool side of the lake only. Due to high traffic, non are allowed on teh office side of the lake. Full pads and helmet must be worn. Windermere Staff may ask guests to refrain from the use of the above mentioned if being used in an unsafe manner."},
      {header:'RVs', body:"Campers, motor homes, and trailers may not be used as sleeping quarters when parked anywhere other than in the RV lots. No automobile (car, truck, van, etc.) may be used as sleeping quarters."},
      {header:'Smoking', body:"Smoking is not permitted within any Windermere buildings. Guests 18 or older are permitted to smoke outside. Violation of this policy will result in a charge."},
      {header:'Trash', body:"There will be an additional cleaning charge resulting from any trash left in hallways or lobby areas of campus. There will be no charge for trash found in designated trash receptacles."},
      {header:'Vehicles', body:"Observe speed limit signs. All passengers must be inside the vehicle in accordance with state highway traffic laws."},
    ]
  }
]

export function findScreenByRoute(route){
  return screens.find((obj)=>obj.route==route)
}
