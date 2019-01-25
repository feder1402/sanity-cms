import icon from 'react-icons/lib/md/local-movies'

export default {
  name: 'header',
  title: 'Header',
  type: 'object',
  icon,
  fields: [
    {
      name: 'title',
      title: 'title',
      type: 'string'
    },
    {
      name: 'level',
      title: 'Level',
      type: 'number'
    }
  ]
}

