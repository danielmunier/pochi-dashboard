
interface ChannelProps {
    channel: {
        id: string;
        name: string;
        // outros campos do canal, se necessário
    };
}

export const GuildChannelItem: React.FC<ChannelProps> = ({ channel }) => {


    return (
        <div className="p-4 mb-2 bg-gray-800 rounded-lg text-white">
            <p>{channel.name}</p>
        </div>
    );
};
