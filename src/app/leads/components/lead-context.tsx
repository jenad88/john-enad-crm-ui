import React from "react";
import { ILead, ILead_Status } from "@/app/leads/model/models";

export type LeadsContextProps = {
  leads: ILead[];
  saveLead: (lead: ILead) => void;
  updateLead: (id: number, updateLead: ILead) => void;
  showNewLeadModal: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
};

export const LeadsContext = React.createContext<LeadsContextProps | null>(null);

export const useLeadsContext = () => {
  const leadsContext = React.useContext(LeadsContext);
  if (leadsContext === undefined) {
    throw new Error("useLeadsContext must be inside a LeadsProvider");
  }
  return leadsContext;
};

const LeadsProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }: { children: React.ReactNode }) => {
  const [leads, setLeads] = React.useState<ILead[]>([
    {
      id: 1,
      name: "Michael Cooper",
      title: "Front-end Developer",
      company: "Toyota Motor Corporation",
      phone: "",
      mobile: "",
      email: "michael.cooper@example.com",
      status: ILead_Status.WORKING,
      owner: {
        firstName: "Michael",
        lastName: "Cooper",
      },
    },
    {
      id: 2,
      name: "Sandra Hawkins",
      title: "Front-end Developer",
      company: "Toyota Motor Corporation",
      phone: "",
      mobile: "",
      email: "sandra.hawkins@example.com",
      status: ILead_Status.WORKING,
      owner: {
        firstName: "Sandra",
        lastName: "Hawkins",
      },
    },
  ]);

  const saveLead = (lead: ILead) => {
    const newLead: ILead = {
      id: Math.random(),
      name: lead.name,
      title: lead.title,
      company: lead.company,
      phone: lead.phone,
      mobile: lead.mobile,
      email: lead.email,
      status: lead.status,
      owner: {
        firstName: lead.owner.firstName,
        lastName: lead.owner.lastName,
      },
    };
    setLeads([...leads, newLead]);
  };

  const updateLead = (id: number, updateLead: ILead) => {
    leads.filter((lead: ILead) => {
      if (lead.id === id) {
        lead.name = updateLead.name;
        lead.title = updateLead.title;
        lead.company = updateLead.company;
        lead.phone = updateLead.phone;
        lead.mobile = updateLead.mobile;
        lead.email = updateLead.email;
        lead.status = updateLead.status;
        lead.owner = updateLead.owner;
        setLeads([...leads]);
      }
    });
  };

  const [showNewLead, setShowNewLead] = React.useState(false);

  return (
    <>
      <LeadsContext.Provider
        value={{
          leads,
          saveLead,
          updateLead,
          showNewLeadModal: [showNewLead, setShowNewLead],
        }}
      >
        {children}
      </LeadsContext.Provider>
    </>
  );
};

export default LeadsProvider;
