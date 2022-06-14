const database = {
    Guests: [{
        id: 1,
        name: "Bill Smith",
        email: "",
        areaId:1
    },
    {
        id: 2,
        name: "Bob Smtih",
        email: "",
        areaId:2
    },
    {
        id: 3,
        name: "Bill Johnson",
        email: "",
        areaId:3
    },
    {
        id: 4,
        name: "Dave Sims",
        email: "",
        areaId:4
    },
    {
        id: 5,
        name: "Sam Jippy",
        email: "",
        areaId:5
    },
    {
        id: 6,
        name: "Carol Baskin",
        email: "",
        areaId:6
    }],
    Areas: [
        { id: 1, name:"northeast", locations: "Chamfort River"},
        { id: 2, name:"northern", locations: "Lost WolfHiking Trail"},
        { id: 3, name:"northwest", locations: "Lodge"},
        { id: 4, name:"southwest", locations: "Gander River"},
        { id: 5, name:"southern", locations: "Campgrounds"},
        { id: 6, name:"southeast", locations: "Pine Bluff Trails"}
    ],
    AreaServices: [
        { id: 1, areaId:1, servicesId: 1},
        { id: 2, areaId:1, servicesId: 2},
        { id: 3, areaId:1, servicesId: 3},
        { id: 4, areaId:2, servicesId: 9},
        { id: 5, areaId:2, servicesId: 4},
        { id: 6, areaId:2, servicesId: 5},
        { id: 7, areaId:3, servicesId: 6},
        { id: 8, areaId:3, servicesId: 7},
        { id: 9, areaId:3, servicesId: 8},
        { id: 10, areaId:3, servicesId: 4},
        { id: 11, areaId:4, servicesId: 3},
        { id:12, areaId:4, servicesId: 9},
        { id:13, areaId:5, servicesId: 8},
        { id:14, areaId:5, servicesId: 6},
        { id:15, areaId:5, servicesId: 7},
        { id:16, areaId:6, servicesId: 9},
        { id:17, areaId:6, servicesId: 4},
        { id:18, areaId:6, servicesId: 10}
    ],
    Services: [
        { id:1, name:"rafting"},
        { id:2, name:"canoeing"},
        { id:3, name:"fishing"},
        { id:4, name:"picnicking"},
        { id:5, name:"rock climbing"},
        { id:6, name:"lodging"},
        { id:7, name:"parking"},
        { id:8, name:"information"},
        { id:9, name:"hiking"},
        { id:10, name:"zip lines"}
    ]
}


export const getServices = () => {
    return database.Services.map(Service => ({ ...Service }))
}
export const getGuest = () => {
    return database.Guests.map(Guest => ({ ...Guest }))
}
export const getAreas = () => {
    return database.Areas.map(Area => ({ ...Area }))
}
export const getAreaServices = () => {
    return database.AreaServices.map(areaService => ({ ...areaService }))
}