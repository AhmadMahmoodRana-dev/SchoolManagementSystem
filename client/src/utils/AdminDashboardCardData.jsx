import { PiStudentDuotone } from "react-icons/pi";
import { SlBriefcase } from "react-icons/sl";
import { MdOutlineAttachMoney } from "react-icons/md";
const cards = [
  {
    id: 1,
    heading:"Total Students",
    bgCard: "#5857ab",
    icon: <PiStudentDuotone size={35} className="text-white" />,
    total: 0,
    thisMonth: 0,
  },
  {
    id: 2,
    heading:"Total Employees",
    bgCard: "#a1a3d9",
    icon: <SlBriefcase size={35} className="text-white" />,
    total: 0,
    thisMonth: 0,
  },
  {
    id: 3,
    heading:"Revenue",
    bgCard: "#f98c95",
    icon: <MdOutlineAttachMoney size={35} className="text-white" />,
    total: 0,
    thisMonth: 0,
  },
  {
    id: 4,
    heading:"Total Profit",
    bgCard: "#6889f6",
    icon: <MdOutlineAttachMoney size={35} className="text-white" />,
    total: 0,
    thisMonth: 0,
  },
];

export default cards;
