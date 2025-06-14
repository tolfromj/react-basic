import MyListData from './MyListData.json'
import MyListItem from './MyListItem'

export default function MyList() {
  const tags = MyListData.map(item => 
                              <MyListItem   key = {item.title}
                                            title = {item.title}
                                            imgUrl = {item.imgUrl}
                                            content = {item.content}/>
                            );
  return (
    <div className="w-5/6 grid grid-cols-2 gap-4">
        {tags}
    </div>
  )
}
