import icon from 'react-icons/lib/md/local-movies'

export default {
  name: 'plan',
  title: 'Plan',
  type: 'object',
  icon,
  fields: [
    {
      name: 'title',
      type: 'string'
    },
    {
      name: 'pfid',
      title: 'Pfid',
      type: 'number'
    },
    {
      name: 'text',
      type: 'array',
      of: [{type: 'block'}]
    },
    {
      name: 'description',
      type: 'string'
    }
  ]
}

