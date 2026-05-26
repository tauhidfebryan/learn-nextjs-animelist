"use client"

import { MagnifyingGlassIcon } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"


const Header = () => {

    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event) => {
        event.preventDefault()
        const keyword = searchRef.current.value

        if (!keyword) return

        router.push(`/search/${keyword}`)
    }

    return (
        <form onSubmit={handleSearch} className="relative">
            <input placeholder="Cari anime..." className="p-1 border rounded-md" ref={searchRef}></input>
            <button className="absolute top-1 inset-e-1.5 cursor-pointer">
                <MagnifyingGlassIcon size={26} />
            </button>
        </form>
    )
}

export default Header