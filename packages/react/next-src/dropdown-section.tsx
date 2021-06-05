import { Dropdown, DropdownOverFlow, Section } from '../src';
import { menu } from '../const';

export const DropdownSection = () => {
    return (
        <Section narrow>
            <DropdownOverFlow label="overflow" items={menu} />
            <Dropdown label="dropdown" items={menu} />
        </Section>
    )
}
