import { FaBell } from "react-icons/fa";

const NotificationCard = () => {
    return (
        <div className="bg-custom-dark-gray rounded-lg p-5 max-w-md w-full">
            <div className="flex items-start border-b-2 border-gray-600 pb-4 w-full">
                <div className="flex-shrink-0 bg-gray-700 p-4 rounded-full mr-4">
                    <FaBell className="text-white" />
                </div>
                <div className="flex-1">
                    <h3 className="font-bold text-white">Incident State Change</h3>
                    <p className="text-gray-300">
                        The status of your incident AG142-10 has been changed to <strong>"In Progress"</strong>.
                    </p>
                </div>
            </div>
            <div className="pt-4 text-gray-400 text-sm">
                <p>Service now</p>
            </div>
        </div>
    )
}

export default NotificationCard