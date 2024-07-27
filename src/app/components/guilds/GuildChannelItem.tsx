
interface ChannelProps {
    channel: {
        id: string;
        name: string;
     
    };
}

export const GuildChannelItem: React.FC<ChannelProps> = ({ channel }) => {


    return (
        <div className="p-4 mb-2 bg-gray-800 rounded-lg text-white">
            <p>{channel.name}</p>
        </div>
    );
};
