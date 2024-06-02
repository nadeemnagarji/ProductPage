import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectComp() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="men's clothing">men's clothing</SelectItem>
          <SelectItem value="jewelery">jewelery</SelectItem>
          <SelectItem value="electronic">electronic</SelectItem>
          <SelectItem value="women's clothing">women's clothing</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
