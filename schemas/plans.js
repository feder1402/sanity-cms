import icon from 'react-icons/lib/md/local-movies'

export default {
  name: 'plans',
  title: 'Plans',
  type: 'object',
  icon,
  fields: [
    {
      name: 'pfid',
      title: 'PFID',
      type: 'number'
    },
    {
      name: 'plans',
      title: 'Plans',
      type: 'array',
      of: [{type: "plan"}]
    }
  ]
}

