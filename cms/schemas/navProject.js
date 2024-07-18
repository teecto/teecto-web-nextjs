
export default {
  name: "navProject",
  title: "Nav Project",
  type: "document",
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // Enables hotspot for image cropping
      },
    },
    {
      name: 'navItem',
      title: 'Related Navigation',
      type: 'reference',
      to: [
        { type: 'navItem' },  // Reference to the navItem document type
        { type: 'navSubItem' }  // Reference to the subNavItems within navItem
      ],
    },
  ],
};
