"use client";
import React from "react";
import teamMembers from "../(marketing)/data";
import { useRouter } from "next/navigation"; // Use next/navigation instead of next/router

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

const TeamSection = () => {
  const router = useRouter();

  const handleProfileClick = (slug: string) => {
    router.push(`/our-people/${encodeURIComponent(slug)}`);
  };
  return (
    <section className="bg-black text-white text-center py-12 w-screen">
      <div className="container max-w-screen-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              onClick={() => handleProfileClick(member.slug)}
              className="team-member"
            >
              <img
                src={member.imageUrl}
                alt={`${member.name}, ${member.role}`}
                className="w-full h-72 object-cover  mb-4 bg-gray-400"
              />
              <h3 className="text-[#00aeef] text-[30px] text-left font-heading">
                {member.name}
              </h3>
              <p className=" text-left font-paragraph">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
