import { FC } from 'react';
import {
    Truck,
    Target,
    Monitor,
    ShoppingCart,
    Home,
    Server,
    Coffee,
    Users,
    Wind,
    Feather,
    Grid,
    Anchor,
    Circle,
} from 'react-feather';

interface ICategoryIconProps {
    itemIcon: string;
}

export const CategoryIcon: FC<ICategoryIconProps> = ({ itemIcon }) => {
    // Truck, Target, Monitor, ShoppingCart, Home, Server, Grid, Coffee, Users, Anchor, Wind, Feather
    const iconSize = 14;
    switch (itemIcon) {
        case 'Truck':
            return <Truck size={iconSize}></Truck>;
        case 'Target':
            return <Target size={iconSize}></Target>;
        case 'Monitor':
            return <Monitor size={iconSize}></Monitor>;
        case 'ShoppingCart':
            return <ShoppingCart size={iconSize}></ShoppingCart>;
        case 'Home':
            return <Home size={iconSize}></Home>;
        case 'Server':
            return <Server size={iconSize}></Server>;
        case 'Grid':
            return <Grid size={iconSize}></Grid>;
        case 'Coffee':
            return <Coffee size={iconSize}></Coffee>;
        case 'Users':
            return <Users size={iconSize}></Users>;
        case 'Anchor':
            return <Anchor size={iconSize}></Anchor>;
        case 'Wind':
            return <Wind size={iconSize}></Wind>;
        case 'Feather':
            return <Feather size={iconSize}></Feather>;
        default:
            return <Circle size={10}></Circle>;
    }
};
