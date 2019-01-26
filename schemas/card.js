import React from 'react'
import icon from 'react-icons/lib/md/local-movies'

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
      name: 'content',
      title: 'Content',
      type: 'content'
    }
  ]
}
