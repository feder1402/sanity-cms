import icon from 'react-icons/lib/md/local-movies'

export default {
  name: 'plans',
  title: 'Plans',
  type: 'object',
  icon,
  fields: [
    {
      name: 'label',
      type: 'string'
    },
    {
      name: 'plans',
      title: 'Plans',
      type: 'array',
      of: [{type: "plan"}]
    }
  ]
}

