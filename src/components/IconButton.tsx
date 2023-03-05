import '../styles/IconButton.scss'

interface props {
    Icon: any
}

export default function IconButton({ Icon }: props) {
    return <>
        <div className='IconButton'>
            <Icon />
        </div>
    </>
}