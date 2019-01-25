import React from 'react'
import icon from 'react-icons/lib/md/local-movies'
import TitleComp from '../components/title.js'

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
      type: 'array',
      of: [{type: "plans"}, {type: "header"}]
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare(selection) {
      const {title} = selection

      return {
        title: 'Title: ' + title,
        subtitle: 'Subtitle'
      }
    },
    component: TitleComp
  }
}
