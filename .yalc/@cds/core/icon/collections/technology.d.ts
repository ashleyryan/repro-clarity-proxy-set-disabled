import { IconAlias, IconShapeTuple } from '../interfaces/icon.interfaces.js';
import { administratorIconName } from '../shapes/administrator.js';
import { animationIconName } from '../shapes/animation.js';
import { applicationIconName } from '../shapes/application.js';
import { applicationsIconName } from '../shapes/applications.js';
import { archiveIconName } from '../shapes/archive.js';
import { assignUserIconName } from '../shapes/assign-user.js';
import { atomIconName } from '../shapes/atom.js';
import { backupRestoreIconName } from '../shapes/backup-restore.js';
import { backupIconName } from '../shapes/backup.js';
import { barCodeIconName } from '../shapes/bar-code.js';
import { batteryIconName } from '../shapes/battery.js';
import { blockIconName } from '../shapes/block.js';
import { blocksGroupIconName } from '../shapes/blocks-group.js';
import { bluetoothOffIconName } from '../shapes/bluetooth-off.js';
import { bluetoothIconName } from '../shapes/bluetooth.js';
import { buildingIconName } from '../shapes/building.js';
import { bundleIconName } from '../shapes/bundle.js';
import { capacitorIconName } from '../shapes/capacitor.js';
import { cdDvdIconName } from '../shapes/cd-dvd.js';
import { certificateIconName } from '../shapes/certificate.js';
import { ciCdIconName } from '../shapes/ci-cd.js';
import { cloudNetworkIconName } from '../shapes/cloud-network.js';
import { cloudScaleIconName } from '../shapes/cloud-scale.js';
import { cloudTrafficIconName } from '../shapes/cloud-traffic.js';
import { clusterIconName } from '../shapes/cluster.js';
import { codeIconName } from '../shapes/code.js';
import { computerIconName } from '../shapes/computer.js';
import { connectIconName } from '../shapes/connect.js';
import { containerVolumeIconName } from '../shapes/container-volume.js';
import { containerIconName } from '../shapes/container.js';
import { controlLunIconName } from '../shapes/control-lun.js';
import { cpuIconName } from '../shapes/cpu.js';
import { dashboardIconName } from '../shapes/dashboard.js';
import { dataClusterIconName } from '../shapes/data-cluster.js';
import { deployIconName } from '../shapes/deploy.js';
import { devicesIconName } from '../shapes/devices.js';
import { disconnectIconName } from '../shapes/disconnect.js';
import { displayIconName } from '../shapes/display.js';
import { downloadCloudIconName } from '../shapes/download-cloud.js';
import { exportIconName } from '../shapes/export.js';
import { fileShare2IconName } from '../shapes/file-share-2.js';
import { fileShareIconName } from '../shapes/file-share.js';
import { flaskIconName } from '../shapes/flask.js';
import { floppyIconName } from '../shapes/floppy.js';
import { hardDiskIconName } from '../shapes/hard-disk.js';
import { hardDriveDisksIconName } from '../shapes/hard-drive-disks.js';
import { hardDriveIconName } from '../shapes/hard-drive.js';
import { helixIconName } from '../shapes/helix.js';
import { hostGroupIconName } from '../shapes/host-group.js';
import { hostIconName } from '../shapes/host.js';
import { importIconName } from '../shapes/import.js';
import { inductorIconName } from '../shapes/inductor.js';
import { installIconName } from '../shapes/install.js';
import { keyboardIconName } from '../shapes/keyboard.js';
import { layersIconName } from '../shapes/layers.js';
import { linkIconName } from '../shapes/link.js';
import { mediaChangerIconName } from '../shapes/media-changer.js';
import { memoryIconName } from '../shapes/memory.js';
import { mobileIconName } from '../shapes/mobile.js';
import { mouseIconName } from '../shapes/mouse.js';
import { namespaceIconName } from '../shapes/namespace.js';
import { networkGlobeIconName } from '../shapes/network-globe.js';
import { networkSettingsIconName } from '../shapes/network-settings.js';
import { networkSwitchIconName } from '../shapes/network-switch.js';
import { noWifiIconName } from '../shapes/no-wifi.js';
import { nodeGroupIconName } from '../shapes/node-group.js';
import { nodeIconName } from '../shapes/node.js';
import { nodesIconName } from '../shapes/nodes.js';
import { nvmeIconName } from '../shapes/nvme.js';
import { pdfFileIconName } from '../shapes/pdf-file.js';
import { phoneHandsetIconName } from '../shapes/phone-handset.js';
import { pluginIconName } from '../shapes/plugin.js';
import { podIconName } from '../shapes/pod.js';
import { processOnVmIconName } from '../shapes/process-on-vm.js';
import { qrCodeIconName } from '../shapes/qr-code.js';
import { rackServerIconName } from '../shapes/rack-server.js';
import { radarIconName } from '../shapes/radar.js';
import { resistorIconName } from '../shapes/resistor.js';
import { resourcePoolIconName } from '../shapes/resource-pool.js';
import { routerIconName } from '../shapes/router.js';
import { rulerPencilIconName } from '../shapes/ruler-pencil.js';
import { scriptExecuteIconName } from '../shapes/script-execute.js';
import { scriptScheduleIconName } from '../shapes/script-schedule.js';
import { shieldCheckIconName } from '../shapes/shield-check.js';
import { shieldXIconName } from '../shapes/shield-x.js';
import { shieldIconName } from '../shapes/shield.js';
import { squidIconName } from '../shapes/squid.js';
import { ssdIconName } from '../shapes/ssd.js';
import { storageAdapterIconName } from '../shapes/storage-adapter.js';
import { storageIconName } from '../shapes/storage.js';
import { tabletIconName } from '../shapes/tablet.js';
import { tapeDriveIconName } from '../shapes/tape-drive.js';
import { terminalIconName } from '../shapes/terminal.js';
import { unarchiveIconName } from '../shapes/unarchive.js';
import { uninstallIconName } from '../shapes/uninstall.js';
import { unlinkIconName } from '../shapes/unlink.js';
import { uploadCloudIconName } from '../shapes/upload-cloud.js';
import { usbIconName } from '../shapes/usb.js';
import { vmIconName } from '../shapes/vm.js';
import { vmwAppIconName } from '../shapes/vmw-app.js';
import { wifiIconName } from '../shapes/wifi.js';
import { xlsFileIconName } from '../shapes/xls-file.js';
import { internetOfThingsIconName } from '../shapes/internet-of-things.js';
import { thinClientIconName } from '../shapes/thin-client.js';
import { digitalSignatureIconName } from '../shapes/digital-signature.js';
import { updateIconName } from '../shapes/update.js';
import { forkingIconName } from '../shapes/forking.js';
export declare const technologyCollectionIcons: IconShapeTuple[];
export declare const technologyCollectionAliases: IconAlias[];
/**
 * Function that can be called to load the core icon set.
 *
 * ```typescript
 * import '@cds/core/icon/register.js';
 * import { loadTechnologyIconSet } from '@cds/core/icon';
 *
 * loadTechnologyIconSet();
 * ```
 *
 */
export declare function loadTechnologyIconSet(): void;
declare module '@cds/core/internal' {
    interface IconRegistrySources {
        [administratorIconName]: string;
        [animationIconName]: string;
        [applicationIconName]: string;
        [applicationsIconName]: string;
        [archiveIconName]: string;
        [assignUserIconName]: string;
        [atomIconName]: string;
        [backupIconName]: string;
        [backupRestoreIconName]: string;
        [barCodeIconName]: string;
        [batteryIconName]: string;
        [blockIconName]: string;
        [blocksGroupIconName]: string;
        [bluetoothIconName]: string;
        [bluetoothOffIconName]: string;
        [buildingIconName]: string;
        [bundleIconName]: string;
        [capacitorIconName]: string;
        [cdDvdIconName]: string;
        [certificateIconName]: string;
        [ciCdIconName]: string;
        [cloudNetworkIconName]: string;
        [cloudScaleIconName]: string;
        [cloudTrafficIconName]: string;
        [clusterIconName]: string;
        [codeIconName]: string;
        [computerIconName]: string;
        [connectIconName]: string;
        [containerIconName]: string;
        [containerVolumeIconName]: string;
        [controlLunIconName]: string;
        [cpuIconName]: string;
        [dashboardIconName]: string;
        [dataClusterIconName]: string;
        [deployIconName]: string;
        [devicesIconName]: string;
        [digitalSignatureIconName]: string;
        [disconnectIconName]: string;
        [displayIconName]: string;
        [downloadCloudIconName]: string;
        [exportIconName]: string;
        [fileShareIconName]: string;
        [fileShare2IconName]: string;
        [flaskIconName]: string;
        [floppyIconName]: string;
        [forkingIconName]: string;
        [hardDriveIconName]: string;
        [hardDriveDisksIconName]: string;
        [hardDiskIconName]: string;
        [helixIconName]: string;
        [hostIconName]: string;
        [hostGroupIconName]: string;
        [importIconName]: string;
        [inductorIconName]: string;
        [installIconName]: string;
        [internetOfThingsIconName]: string;
        [keyboardIconName]: string;
        [layersIconName]: string;
        [linkIconName]: string;
        [mediaChangerIconName]: string;
        [memoryIconName]: string;
        [mobileIconName]: string;
        [mouseIconName]: string;
        [namespaceIconName]: string;
        [networkGlobeIconName]: string;
        [networkSettingsIconName]: string;
        [networkSwitchIconName]: string;
        [nodeGroupIconName]: string;
        [nodeIconName]: string;
        [nodesIconName]: string;
        [noWifiIconName]: string;
        [nvmeIconName]: string;
        [pdfFileIconName]: string;
        [phoneHandsetIconName]: string;
        [pluginIconName]: string;
        [podIconName]: string;
        [processOnVmIconName]: string;
        [qrCodeIconName]: string;
        [rackServerIconName]: string;
        [radarIconName]: string;
        [resistorIconName]: string;
        [resourcePoolIconName]: string;
        [routerIconName]: string;
        [rulerPencilIconName]: string;
        [scriptExecuteIconName]: string;
        [scriptScheduleIconName]: string;
        [shieldIconName]: string;
        [shieldCheckIconName]: string;
        [shieldXIconName]: string;
        [squidIconName]: string;
        [ssdIconName]: string;
        [storageIconName]: string;
        [storageAdapterIconName]: string;
        [tabletIconName]: string;
        [tapeDriveIconName]: string;
        [terminalIconName]: string;
        [thinClientIconName]: string;
        [unarchiveIconName]: string;
        [uninstallIconName]: string;
        [unlinkIconName]: string;
        [updateIconName]: string;
        [uploadCloudIconName]: string;
        [usbIconName]: string;
        [vmIconName]: string;
        [vmwAppIconName]: string;
        [wifiIconName]: string;
        [xlsFileIconName]: string;
    }
}
