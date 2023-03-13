const colours: Record<ChartDataFeature, any> = {
  burger: "#2F43A7",
  donut: "#af70e3",
  fries: "#f65dbd",
  hotdog: "#ff5d87",
  kebab: "#ff7c4d",
  sandwich: "#ffa600",
};

export const getColour = (key: ChartDataFeature) => {
  return colours[key];
};
