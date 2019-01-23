import icon from 'react-icons/lib/md/local-movies'

export default {
  name: 'plans',
  title: 'Plans',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'name',
      type: 'string'
    }
  ],
    prepare(selection) {
      return {
        title: `Name: ${selection.name}`
      }
    }
  }

