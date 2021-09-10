module.exports = {
  ROOM_ID: "sjsESuoFTqzDBU42\\Cafe Nervosa by Teyatro",
  MAP_ID: "custom_entrance",
  API_KEY: "avvafUyLncqYfTai",
  DOOR_IMAGES: {
    open: "https://i.imgur.com/loP8qnp.jpg",
    closed: "https://i.imgur.com/loP8qnp.jpg",
    width: 16, // width in Gather tiles (pixels / 32) of the door images
    height: 16, // height in Gather tiles (pixels / 32) of the door images
  },
  DOOR_POS: {
    x: 42,
    y: 54,
  },
  PASSWORD: "1234",
  DOOR_URL: "https://ismail-teyatro-gather-door-api.herokuapp.com/", // note: http://localhost:3000 will NOT work, because only https is allowed in iFrames on https domains :P
};
