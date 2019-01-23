import icon from 'react-icons/lib/md/local-movies'
import Title from '../components/title.js'

export default {
  name: 'card',
  title: 'Card',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string'
    },
    {
      name: 'plans',
      title: 'Plans',
      type: 'reference',
      to: [{type: 'plans'}]
    }
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description'
    },
    prepare(selection) {
      const {description, title} = selection

      return {
        title: `${selection.title}  - ${selection.description}`,
        component: Title
      }
    }
  }
}
