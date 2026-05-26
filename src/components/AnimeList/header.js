import Link from "next/link"

const Header = ({ title, linkTitle, linkHref }) => {
    return (
        <div className="flex justify-between items-center p-6">
            <h1 className="font-bold text-xl">{title}</h1>
            {
                linkTitle && linkHref
                ?
                <Link href={linkHref}>
                    {linkTitle}
                </Link>
                :
                null
            }
        </div>
    )
}

export default Header