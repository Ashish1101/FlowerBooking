import React , {useState} from 'react'
import Card from './Product/Card'
const Search = () => {
    const [text , setText] = useState('')
    const setValue = (e) => {
        setText(e.target.value)
        console.log(text)
    }
    return (
        <div className="space-y-12">
            <div
            className="mt-2">
                <input
                className=" w-auto md:w-full outline-none focus:ring-1 ring-purple-400 placeholder-purple-400 placeholder-opacity-60  h-8 rounded-xl pl-4 text-gray-800"
                placeholder="search product..."
                value={text}
                type="text"
                onChange={setValue}
                />
            </div>
            <div className="flex sm:flex-col md:flex-row flex-wrap justify-around">
                <Card price={400} name={"rose"} img={'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'}/>
                <Card price={400} name={"rose"} img={'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'}/>
                <Card price={400} name={"rose"} img={'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'}/>
                <Card price={400} name={"rose"} img={'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'}/>
                <Card price={400} name={"rose"} img={'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'}/>
                <Card price={400} name={"rose"} img={'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'}/>
                <Card price={400} name={"rose"} img={'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'}/>
                <Card price={400} name={"rose"} img={'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'}/>
                <Card price={400} name={"rose"} img={'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'}/>
                <Card price={400} name={"rose"} img={'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'}/>
                <Card price={400} name={"rose"} img={'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'}/>
                <Card price={400} name={"rose"} img={'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'}/>
                <Card price={400} name={"rose"} img={'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'}/>
                <Card price={400} name={"rose"} img={'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'}/>
                <Card price={400} name={"rose"} img={'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'}/>
                <Card price={400} name={"rose"} img={'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'}/>
                <Card price={400} name={"rose"} img={'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'}/>
                <Card price={400} name={"rose"} img={'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'}/>
                <Card price={400} name={"rose"} img={'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'}/>
                <Card price={400} name={"rose"} img={'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'}/>

            </div>
        </div>
    )
}

export default Search
