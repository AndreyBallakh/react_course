import React from 'react'
import MyInput from './UI/Input/MyInput'
import MySelect from './UI/Select/MySelect'

const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
        <MyInput
          value={filter.query}
          onChange={(e) => setFilter({...filter, query: e.target.value})}
          placeholder="search..."
        />
        <MySelect
          value={filter.sort}
          onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
          defaultValue="sort by"
          option={[
            { value: "title", name: "sort by name" },
            { value: "body", name: "sort by body" },
          ]}
        />
      </div>
  )
}

export default PostFilter