import { useEffect } from "react"
import { useState } from "react"
import { getCategories } from "../utils"

export function Categories({type, selectedCategories, setSelectedCategories}) {
    const [categories, setCategories] = useState(null)

    useEffect(() => {
        getCategories(type).then(setCategories)
    }, [])
    
    const handleChange = (id) => {
        setSelectedCategories(prev=>prev.includes(id) ? prev.filter((prevId=> prevId != id)) : [...prev,id])
    }

    return (
        <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto p-4">
            { categories && categories.map(categ=> 
                <fieldset key={categ.id} className="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4 flex-0">
                    <label className="label">
                        <input type="checkbox" className="checkbox" onChange={()=>handleChange(categ.id)}/>
                        {categ.name}
                    </label>
                </fieldset>
            ) }
        </div>
    )
}