"use client";

import Header from "@/components/header";
import ServiceCard from "@/components/service-card";
import { fetchServices } from "@/lib/api";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Dashboard() {
	const [services, setServices] = useState<ServiceReceivedData[]>([]);

	const [loading, setLoading] = useState(true);

	const router = useRouter();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetchServices("open");
				console.log(data);
				if (!data.error) setServices(data["services"]);
				setLoading(false);
			} catch (error) {
				console.log(error);
				setLoading(false);
			}
		};

		setLoading(true);
		fetchData();
	}, []);

	return (
		<main>
			<Header />
			<section className="max-w-[1800px] min-[1800px]:mx-auto box-content py-6 px-4 md:px-16 grid grid-cols-1 gap-6 xl:grid-cols-2">
				{services.map((service: any) => (
					<ServiceCard key={service["id"]} id={service["id"]} title={service["title"]} description={service["description"]} username={service["creator"]["username"]} type={service["type"]} price={service["price"]} img={service["image_url"] ? service["image_url"] : null} />
				))}
			</section>
		</main>
	);
}
