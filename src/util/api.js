//simulate real api
//every method returns promise

export const getUsers = async () => {
  return [
    {
      id: "1",
      body: "First comment",
      username: "Emma",
      userId: "1",
      parentId: null,
      createdAt: "2023-03-16T23:00:33.010+02:00",
      userImage:"https://media.istockphoto.com/id/482680318/photo/excited-selfies-with-her-feline-friend.jpg?s=612x612&w=0&k=20&c=Nej-upSvphHwH9yEHJOFJTwn5xkYLdizUI1gTItqt0U=",
      post: 'I am baby schlitz subway tile freegan, waistcoat pitchfork lumbersexual cray. Put a bird on it locavore blog freegan keffiyeh kinfolk cardigan selfies activated charcoal deep v sriracha unicorn VHS PBR&B. Gatekeep retro ethical hot chicken sriracha raclette four loko jianbing cred coloring book cardigan meh fanny pack. Intelligentsia migas crucifix iceland tonx affogato taiyaki, gatekeep shabby chic. Swag live-edge 3 wolf moon, synth subway tile edison bulb small batch etsy hell of neutra.',
      photo: 'https://images.unsplash.com/photo-1544982503-9f984c14501a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: "2",
      body: "Second comment",
      username: "John",
      userId: "2",
      parentId: null,
      createdAt: "2023-01-16T23:00:33.010+02:00",
      userImage:'https://media.istockphoto.com/id/1397481967/photo/happy-young-woman-traveler-relaxing-and-looking-at-the-beautiful-sunrise-on-the-top-of.jpg?s=612x612&w=0&k=20&c=ufjuKQmxrWLYbVkaLnRvjjW4b40X7vGDq7DRkQWnjwM=',
      post:'Taxidermy street art lo-fi plaid four dollar toast normcore. DSA irony drinking vinegar banh mi sustainable artisan jean shorts sus mustache chambray. Quinoa grailed street art schlitz williamsburg mustache. Fanny pack tonx subway tile beard slow-carb jianbing migas jawn.',
      photo: 'https://images.unsplash.com/photo-1678615303558-2aa3009e68ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8RnpvM3p1T0hONnd8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: "3",
      body: "First comment first child",
      username: "Stacy",
      userId: "2",
      parentId: "1",
      createdAt: "2023-03-16T23:00:33.010+02:00",
      userImage:'https://media.istockphoto.com/id/1451076467/photo/girl-loves-her-mom.jpg?s=612x612&w=0&k=20&c=ZWtjIvkictdl-88g9B73BfsDbbQLuSw1aIO4znckGAc=',
      post:'Messenger bag thundercats succulents irony, shoreditch hoodie fashion axe gluten-free beard. Williamsburg pop-up raw denim wayfarers XOXO echo park, direct trade paleo. Butcher food truck literally organic. Biodiesel artisan keytar chambray, chillwave lumbersexual vegan subway tile offal.',
      photo: 'https://images.unsplash.com/photo-1528255915607-9012fda0f838?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRyYXZlbCUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: "4",
      body: "Second comment second child",
      username: "Jack",
      userId: "2",
      parentId: "2",
      createdAt: "2023-02-16T23:00:33.010+02:00",
      userImage:'https://media.istockphoto.com/id/1397481967/photo/happy-young-woman-traveler-relaxing-and-looking-at-the-beautiful-sunrise-on-the-top-of.jpg?s=612x612&w=0&k=20&c=ufjuKQmxrWLYbVkaLnRvjjW4b40X7vGDq7DRkQWnjwM=',
      post:'Single-origin coffee neutra street art pitchfork gentrify esse gorpcore meh yr eiusmod wayfarers ethical ugh. Polaroid pinterest ethical, offal in tacos deep v vape. Typewriter man bun adipisicing squid. Lumbersexual meh you probably haven heard of them dolore wayfarers single-origin coffee velit irony enim brunch echo park.',
      photo:'https://images.unsplash.com/photo-1621682372775-533449e550ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bW91bmF0aW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
    }
  ];
};

export const createUser = async (text, parentId = null, postContent, photoURL) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    username: "Emma",
    userId: "1",
    parentId,
    createdAt: new Date().toISOString(),
    userImage:"https://media.istockphoto.com/id/482680318/photo/excited-selfies-with-her-feline-friend.jpg?s=612x612&w=0&k=20&c=Nej-upSvphHwH9yEHJOFJTwn5xkYLdizUI1gTItqt0U=",
    post: postContent,
    photo: photoURL
  };
};

export const updateUser = async (text) => {
  return { text };
};

export const deleteUser = async () => {
  return {};
};