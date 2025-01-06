export interface DropdownProps{
    options: string[] 
    dropdownName: string;
    onOptionClick: (option:string) => void;
}