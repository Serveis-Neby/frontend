import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {cn} from "@/lib/utils";

interface UserTypeSelectProps {
	className?: string;
	value: string;
	setValue: (value: string) => void;
}

export default function UserTypeSelect({className, value, setValue}: UserTypeSelectProps) {
	return (
		<Tabs defaultValue="neighbor" onValueChange={type => setValue(type)}>
			<TabsList className={cn("w-full h-fit p-0 rounded-lg overflow-hidden border-2 border-foreground bg-foreground", className)}>
				<TabsTrigger className="flex-1 w-1/2 px-8 py-2 rounded-none font-semibold max-sm:text-xs text-base" value="neighbor">
					Vecino
				</TabsTrigger>
				<TabsTrigger className="flex-1 w-1/2 px-8 py-2 rounded-none font-semibold max-sm:text-xs text-base" value="admin">
					Administrador
				</TabsTrigger>
			</TabsList>
		</Tabs>
	);
}