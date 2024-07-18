export default {
    name: 'navSubItem',
    title: 'Sub Navigation Item',
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
      {
        name: 'navItem',
        title: 'Navigation Items',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'navItem' }] }],
      },
    ],
  };