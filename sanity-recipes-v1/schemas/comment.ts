import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    defineField({
      name: 'recipeID',
      title: 'Recipe ID',
      type: 'string',
    }),
    defineField({
      name: 'username',
      title: 'Username',
      type: 'string',
    }),
    defineField({
      name: 'userAvatar',
      title: 'User Avatar',
      type: 'string',
    }),
    defineField({
      name: 'comment',
      title: 'Comment',
      type: 'string',
    }),
    defineField({
      name: 'blockComment',
      title: 'Block Comment',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})
