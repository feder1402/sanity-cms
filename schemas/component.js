import icon from 'react-icons/lib/md/local-movies'

export default {
  name: 'component',
  title: 'Component',
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

