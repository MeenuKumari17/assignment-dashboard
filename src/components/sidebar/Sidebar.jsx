import "./sidebar.scss";
import HomeIcon from '@mui/icons-material/Home';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="center">
        <ul>
          <li>
            <HomeIcon color="primary" className="icons"/>
          </li>
          <li>
          <AssessmentOutlinedIcon className="icons"/>
          </li>
          <li>
            <FactCheckOutlinedIcon className="icons"/>
          </li>
          <li>
            <AccountBalanceWalletOutlinedIcon className="icons"/>
          </li>
          <li>
            <LocalMallOutlinedIcon className="icons"/>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Sidebar;