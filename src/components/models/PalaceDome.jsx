export default function PalaceDome({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[1.5, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#faf7f2" roughness={0.5} />
      </mesh>
      <mesh position={[0, 1.4, 0]}>
        <cylinderGeometry args={[0.15, 0.2, 0.5, 8]} />
        <meshStandardMaterial color="#d4af37" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0, 1.8, 0]}>
        <sphereGeometry args={[0.12, 8, 8]} />
        <meshStandardMaterial color="#d4af37" metalness={0.9} emissive="#f0d78c" emissiveIntensity={0.2} />
      </mesh>
    </group>
  );
}
