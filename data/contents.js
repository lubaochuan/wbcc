export const screens = {
  recreation:{
    title: 'Recreation',
    image: '',
    items:[
      {header:'Activities', body:'We offer many recreation options.'}],
    links:[
      {text:'The Cave', route:'Cave'},
      {text:'The Edge', route:'Edge'},
      {text:'The Forest', route:'Forest'},
      {text:'The Splash', route:'Splash'},
      {text:'The Marina', route:'Marina'}]
  },
  Cave: {
    title: 'The Cave',
    image: '',
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
            longitude: -92.837912}}]}},
  Edge: {
    title: 'The Edge',
    image: '',
    items: [
      {header:'When', body:'Monday-Saturday'},
      {header:'Where', body:'Recreation Climbs meet 10 minutes before scheduled time at The Edge'},
      {header:'How', body:'Schedule and purchase tickets at The Barn'},
      {header:'Duration', body:'Recreation Climbs are 1 hour long'},
      {header: 'Recreation Climbs', body: 'During your hour of free climb time you could experience flying down our zip lines or even leap into nothingness on our Leap of Faith. Our staff are fully trained and certified to ACCT Standards and have the experience to match. Our open elements may change from day to day resulting in the possibility of having a different experience each day.'},
      {header: 'Private Sessions',
        body: 'Are you looking for something that is more group oriented? We have the perfect solution for you, a Private Session! Our staff will work one-on-one with you to help design the perfect program for what you are wanting to do. Private Sessions are typically 3 to 8 hours, but we can adjust that to meet your groups needs.',},],
    coordinates: {
      latitude: 38.0333826,
      longitude: -92.8508212}},
  Forest:{
    title: 'The Forest',
    image: '',
    items: [
      {header:'When', body:'By reservation.'},
      {header:'Where', body:'Games are held at The Forest.'},
      {header:'How', body:'Reservations can be made with your event planner.'},
      {header:'Duration', body:'Games are 1 hour long.'},
      {header:'Fees', body:'$11 per person. Fee includes your equipment rental, a stash of ammo and use of the course for an hour.'},
      {header:'Release Form', body:'The FOREST participants must submit a release for signed by parents if participant is under 18 which is available on the Windermere website.'}],
    coordinates: {
      latitude: 38.0330855,
      longitude: -92.8508168,}},
  Splash:{
    title: 'The Splash',
    image: '',
    items: [
      {header:'When', body:'Monday-Saturday during summer season.'},
      {header:'Where', body:'Participants meet at the boat house on the dock.'},
      {header:'How', body:'Schedule and purchase tickets for the inflatables at the dock.'},
      {header:'Duration', body:'The inflatables are in 30 minute sessions.'},
      {header:'The Inflatables', body:'Ready to get wet while having a blast? Jump into our Inflatable Waterpark! With a wide variety of water trampolines, icebergs, and water tots, it is fun for the whole family. Our waterpark is under the close supervision of our American Red Cross certified Lifeguards. All participants must wear a provided life vest.',
      },
      { header:'What do I bring?', body:'Bring modest, one piece swimwear and a towel. Life vests are provided.'}],
    coordinates: {
      latitude: 38.0334189,
      longitude: -92.8365549,}},
  Marina:{
    title: 'The Marina',
    image: '',
    items: [
      {header:'When', body:'Monday-Saturday during summer season.'},
      {header:'Where', body:'Rentals meet at the boat house on the dock.'},
      {header:'How', body:'Schedule and purchase tickts for Rentals at the dock.'},
      {header:'Duration', body:'Rentals are in 30 minute sessions.'},
      {header:'Rentals & Marina Services', body: 'See Windermere Cove from a whole new perspective. We offer many different types of boats for rent including canoes and kayaks! Want to bring your boat? We have a full service marina available with over 40 boat slips. Need fuel? We got you covered! Out of bait? We got you covered! Fishermen - when you have caught your limit we have a fish cleaning station located on our dock.'},
      {header:'What do I bring?', body:'Bring modest, one piece swimwear and a towel. Life vests are provided.'}],
    coordinates: {
      latitude: 38.0332049,
      longitude: -92.8356746}}
}
