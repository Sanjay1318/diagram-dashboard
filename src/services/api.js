// Mock API service — components detected from the Sample Diagram (P&ID / shape sheet)
// position: { x, y } as percentage of image width/height
const mockComponents = [
  { id: 1,  name: "PV-1000",  symbol: "PV",  description: "Pressure Vessel",               position: { x: 20, y: 72 } },
  { id: 2,  name: "PIC-101",  symbol: "PIC", description: "Pressure Indicating Controller", position: { x: 38, y: 69 } },
  { id: 3,  name: "PT-102",   symbol: "PT",  description: "Pressure Transmitter",           position: { x: 38, y: 73 } },
  { id: 4,  name: "PE-100",   symbol: "PE",  description: "Pressure Element",               position: { x: 38, y: 77 } },
  { id: 5,  name: "HEX-300",  symbol: "HX",  description: "Heat Exchanger (vertical)",      position: { x: 57, y: 72 } },
  { id: 6,  name: "HEX-500",  symbol: "HX",  description: "Heat Exchanger (horizontal)",    position: { x: 20, y: 90 } },
  { id: 7,  name: "XV-200 A", symbol: "XV",  description: "Control Valve — Line A",         position: { x: 39, y: 90 } },
  { id: 8,  name: "XV-200 B", symbol: "XV",  description: "Control Valve — Line B",         position: { x: 57, y: 90 } },
  { id: 9,  name: "XV-200 C", symbol: "XV",  description: "Control Valve — Line C",         position: { x: 75, y: 90 } },
  { id: 10, name: "P-XXX A",  symbol: "P",   description: "Pump — Type A",                  position: { x: 20, y: 81 } },
  { id: 11, name: "P-XXX B",  symbol: "P",   description: "Pump — Type B",                  position: { x: 38, y: 81 } },
  { id: 12, name: "P-XXX C",  symbol: "P",   description: "Pump — Type C",                  position: { x: 57, y: 81 } },
];

export const fetchComponents = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockComponents), 600);
  });
};
