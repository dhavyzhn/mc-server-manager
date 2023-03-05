import IconButton from './IconButton';
import { ReactComponent as DesktopSVG } from '../assets/desktop.svg';
import '../styles/SideMenu.scss';

export default function SideMenu() {
    return <>
        <div className='SideMenu'>
            <IconButton Icon={DesktopSVG} />
        </div>
    </>
}