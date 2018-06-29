import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import * as firebase from 'firebase'
import storage from 'redux-persist/lib/storage'
// defaults to AsyncStorage for react-native

//
// Initial State...
//

const initialState = {
  screens: [],
}

//
// Reducer...
//

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "setScreensData":
      return { ...state, screens: action.value }
    default:
      return state
  }
}

//
// Store...
//
const logger = createLogger({
  // ...options
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)
const store = createStore(persistedReducer, applyMiddleware(thunkMiddleware, logger))

export { store }

//
// Action Creators
//

const setScreensData = (screensData) => {
  return {
    type: "setScreensData",
    value: screensData
  }
}

const watchScreensData = () => {
  return function(dispatch) {
    firebase.database().ref("screens").on("value", function(snapshot) {
      var screensData = snapshot.val()
      console.log("snapshot:"+screensData)
      var actionSetScreensData = setScreensData(screensObj2Array(screensData))
      dispatch(actionSetScreensData)
    }, function(error) { console.log(error) })
  }
}

// convert object from firebase to screens array & add pathes to elements
function screensObj2Array(data){
  var screens = []
  Object.keys(data).forEach(function(key,index) {
    let screen = data[key]
    screen.path = "screens/"+key
    if (screen.items){
      let items = []
      Object.keys(screen.items).forEach(function(key,index) {
        let item = screen.items[key]
        item.path = screen.path+"/items/"+key
        items.push(item)
      })
      screen.items = items
    }
    if (screen.links){
      let links = []
      Object.keys(screen.links).forEach(function(key,index) {
        let link = screen.links[key]
        link.path = screen.path+"/links/"+key
        links.push(link)
      })
      screen.links = links
    }
    if (screen.map){
      let markers = []
      Object.keys(screen.map.markers).forEach(function(key,index) {
        let marker = screen.map.markers[key]
        marker.path = screen.path+"/map/markers/"+key
        markers.push(marker)
      })
      screen.map.markers = markers
    }
    screens.push(screen)
  })
  return screens
}

export { setScreensData, watchScreensData }
