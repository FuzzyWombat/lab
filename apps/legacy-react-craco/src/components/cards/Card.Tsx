import React, {useCallback} from 'react';

const Card:React.FC<{id: number, status: string}>= ({id, status}) => {
    const refetchStats = new CustomEvent("stats-refetch", {});

    return <div>LEGACY</div>;
}

export default Card;
