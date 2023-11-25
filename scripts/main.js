Events.on(EventType.ClientLoadEvent, () => {
    var url = "https://mirror.ghproxy.com/github.com/Anuken/Mindustry/blob/master/servers_v7.json"
    var callback = d => {
        try {
            let list = JSON.parse(new java.lang.String(d.getResult(), "UTF-8"));
            Core.app.post(() => {
                try {
                    //Vars.defaultServers.clear();
                    list.forEach(t => {
                        Vars.defaultServers.add(ServerGroup(t.name, t.address))
                    })
                } catch (error) { print(error) }
            })
        } catch (error) { print(error) }
    }

    if (Version.build >= 136)
        Http.get(url, callback)
    else
        Core.net.httpGet(url, callback, () => { })
})
