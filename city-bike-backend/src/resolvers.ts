export const resolvers = {
  Station: {
    id: (parent) => parent.id,
    name: (parent) => parent.name,
    address: (parent) => parent.address,
    coordinate_x: (parent) => parent.coordinate_x,
    coordinate_y: (parent) => parent.coordinate_y,
  },

  Query: {
    station: (parent) => {
      console.log(parent);
      return [];
    },
  },
};
