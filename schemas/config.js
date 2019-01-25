import icon from 'react-icons/lib/md/build'

export default {
  name: 'config',
  title: 'Config',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    }
  ],
    prepare(selection) {
      return {
        title: `title: ${selection.title}`
      }
    }
  }

