local Loaded = false							

AddEventHandler("playerSpawned", function ()
	if not Loaded then
		ShutdownLoadingScreenNui()
		Loaded = true
	end
end)