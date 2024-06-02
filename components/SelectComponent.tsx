import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectCompProps {
  setCategory: (category: string) => void;
}
export function SelectComp({ setCategory }: SelectCompProps) {
  return (
    <Select onValueChange={(value) => setCategory(value)}>
      <SelectTrigger className="sm:w-[180px] w-full">
        <SelectValue placeholder="Select Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="men's clothing">men's clothing</SelectItem>
          <SelectItem value="jewelery">jewelery</SelectItem>
          <SelectItem value="electronic">electronic</SelectItem>
          <SelectItem value="women's clothing">women's clothing</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
