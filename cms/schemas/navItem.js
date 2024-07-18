export default {
    name: 'navItem',
    title: 'Navigation Item',
    type: 'document',
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
        name: 'tools',
        title: 'Tools',
        type: 'array',
        of: [{ type: 'image' }],
      },
    ],
  };